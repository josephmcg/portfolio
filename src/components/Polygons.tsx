'use client'

import { useEffect, useState } from 'react'

interface PolygonProps extends React.ComponentProps<'div'> {
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
  ...props
}) => {
  return (
    <div
      className="animate-float absolute bg-white bg-opacity-10"
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

  useEffect(() => {
    const createPolygons = (): void => {
      const newPolygons: PolygonProps[] = []

      for (let i = 0; i < 20; i++) {
        const size = Math.random() * 50 + 50 // Random size between 50px and 100px
        const xPos = Math.random() * window.innerWidth
        const yPos = Math.random() * window.innerHeight
        const rotation = Math.random() * 360

        newPolygons.push({ size, xPos, yPos, rotation })
      }

      setPolygons(newPolygons)
    }

    createPolygons()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {polygons.map((polygon, index) => (
        <Polygon
          key={index}
          size={polygon.size}
          xPos={polygon.xPos}
          yPos={polygon.yPos}
          rotation={polygon.rotation}
        />
      ))}
    </div>
  )
}
