import classNames from 'classnames'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type Props<T extends ElementType> = {
  as?: T
  children?: ReactNode
  edgePadding?: boolean
}

export const Container = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  edgePadding,
  ...props
}: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || 'div'

  return (
    <Component
      className={classNames([
        'max-w-3xl mx-auto w-full',
        edgePadding && 'px-2',
        className,
      ])}
      {...props}
    >
      {children}
    </Component>
  )
}
