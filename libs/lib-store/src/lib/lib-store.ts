import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

type NewState<T> = T | ((previous: T) => T);

export class BaseStore<T> {
  private readonly state$: BehaviorSubject<T>;
  private readonly initialState: T;

  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
    this.initialState = initialState;
  }

  protected getState(): T {
    return this.state$.getValue();
  }

  protected setState(newState: NewState<T>): void {
    if (newState instanceof Function) {
      const deepClonedNewState = cloneDeep(newState(this.getState()));
      this.state$.next(deepClonedNewState);
      return;
    }
    this.state$.next(newState);
  }

  protected select<S>(selectFn: (state: T) => S): Observable<S> {
    return this.state$.pipe(map(selectFn), distinctUntilChanged(isEqual));
  }

  protected resetState() {
    this.state$.next(this.initialState);
  }
}
