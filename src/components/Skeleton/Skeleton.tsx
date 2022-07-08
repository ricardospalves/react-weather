import classNames from 'classnames'

const SHAPE_STYLES = {
  circular: 'rounded-full',
  rectangular: 'rounded',
}

type SkeletonProps = {
  shape?: keyof typeof SHAPE_STYLES
  className?: string
}

export const Skeleton = ({ shape, className }: SkeletonProps) => {
  return (
    <div
      className={classNames([
        'animate-pulse dark:bg-black bg-slate-300',
        SHAPE_STYLES[shape || 'rectangular'],
        className,
      ])}
    />
  )
}
