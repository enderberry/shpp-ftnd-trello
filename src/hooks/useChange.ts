import React from 'react';

export default function useChange<E>(setState: (a1: any) => void): (a1: React.ChangeEvent<E>) => void {
  return (event) => ('value' in event.target ? setState(event.target.value) : undefined);
}
