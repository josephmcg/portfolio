'use client'

import clsx from 'clsx'
import { useCallback, useEffect, useState } from 'react'

interface PolygonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size: number
  xPos: number
  yPos: number
  rotation: number
}

const Polygon: React.FC<PolygonProps> = ({
  size,
  xPos,
  yPos,
  rotation,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'absolute animate-float cursor-grab bg-white opacity-10 active:cursor-grabbing',
        className,
      )}
      style={{
        width: `${String(size)}px`,
        height: `${String(size)}px`,
        top: `${String(yPos)}px`,
        left: `${String(xPos)}px`,
        rotate: `${String(rotation)}deg`,
      }}
      {...props}
    />
  )
}

export const Polygons: React.FC = () => {
  const [polygons, setPolygons] = useState<PolygonProps[]>([])
  const [activePolygon, setActivePolygon] = useState<number>()
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const isNoActivePolygon = typeof activePolygon !== 'number'

  useEffect(() => {
    const createPolygons = (): void => {
      const newPolygons: PolygonProps[] = []

      for (let index = 0; index < 20; index++) {
        const size = Math.random() * 50 + 50 // Random size between 50px and 100px
        const xPos = Math.random() * window.innerWidth
        const yPos = Math.random() * window.innerHeight
        const rotation = Math.random() * 360

        newPolygons.push({
          size,
          xPos,
          yPos,
          rotation,
        })
      }

      setPolygons(newPolygons)
    }

    createPolygons()
  }, [])

  const handleMouseDown = (index: number, event: React.MouseEvent): void => {
    const polygon = polygons[index]
    if (!polygon) {
      return
    }

    setActivePolygon(index)

    setOffset({
      x: event.clientX - polygon.xPos,
      y: event.clientY - polygon.yPos,
    })
  }

  const handleMouseMove = useCallback(
    (event: MouseEvent): void => {
      if (isNoActivePolygon) {
        return
      }

      const xPos = event.clientX - offset.x
      const yPos = event.clientY - offset.y

      setPolygons((previousPolygons) =>
        previousPolygons.map((polygon, index) =>
          index === activePolygon ? { ...polygon, xPos, yPos } : polygon,
        ),
      )
    },
    [activePolygon, offset, isNoActivePolygon],
  )

  const handleMouseUp = useCallback((): void => {
    setActivePolygon(undefined)
  }, [])

  useEffect(() => {
    if (isNoActivePolygon) {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    } else {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return (): void => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [activePolygon, handleMouseMove, handleMouseUp, isNoActivePolygon])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {polygons.map((polygon, index) => (
        <Polygon
          key={index}
          tabIndex={-1}
          onMouseDown={(event) => {
            handleMouseDown(index, event)
          }}
          size={polygon.size}
          xPos={polygon.xPos}
          yPos={polygon.yPos}
          rotation={polygon.rotation}
        />
      ))}
    </div>
  )
}
