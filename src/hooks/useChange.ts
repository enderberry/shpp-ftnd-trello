import React from 'react';

export default function useChange<E>(setState: (val: any) => void): (evt: React.ChangeEvent<E>) => void {
  return (event) => ('value' in event.target ? setState(event.target.value) : undefined);
}
