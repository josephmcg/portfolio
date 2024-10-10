'use client'

import { useEffect, useState } from 'react'

interface PolygonProps extends React.ComponentProps<'div'> {
  size: number
  xPos: number
  yPos: number
  rotation: number
  handleDrag: (index: number, xPos: number, yPos: number) => void
  index: number
}

const Polygon: React.FC<PolygonProps> = ({
  size,
  xPos,
  yPos,
  rotation,
  handleDrag,
  index,
  ...props
}) => {
  const handleMouseDown = (event: React.MouseEvent): void => {
    const offset = {
      x: event.clientX - xPos,
      y: event.clientY - yPos,
    }

    const handleMouseMove = (moveEvent: MouseEvent): void => {
      handleDrag(
        index,
        moveEvent.clientX - offset.x,
        moveEvent.clientY - offset.y,
      )
    }

    const handleMouseUp = (): void => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    // Attach event listeners to the document to handle dragging across the entire screen
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="absolute animate-float cursor-grab bg-white bg-opacity-10 active:cursor-grabbing"
      style={{
        width: `${String(size)}px`,
        height: `${String(size)}px`,
        top: `${String(yPos)}px`,
        left: `${String(xPos)}px`,
        rotate: `${String(rotation)}deg`,
      }}
      onMouseDown={handleMouseDown}
      {...props}
    />
  )
}

export const Polygons: React.FC = () => {
  const [polygons, setPolygons] = useState<Omit<PolygonProps, 'handleDrag'>[]>(
    [],
  )

  useEffect(() => {
    const createPolygons = (): void => {
      const newPolygons: Omit<PolygonProps, 'handleDrag'>[] = []

      for (let i = 0; i < 20; i++) {
        const size = Math.random() * 50 + 50 // Random size between 50px and 100px
        const xPos = Math.random() * window.innerWidth
        const yPos = Math.random() * window.innerHeight
        const rotation = Math.random() * 360

        newPolygons.push({
          size,
          xPos,
          yPos,
          rotation,
          index: i,
        })
      }

      setPolygons(newPolygons)
    }

    createPolygons()
  }, [])

  const handleDrag = (index: number, xPos: number, yPos: number): void => {
    setPolygons((prevPolygons) =>
      prevPolygons.map((polygon, i) =>
        i === index ? { ...polygon, xPos, yPos } : polygon,
      ),
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {polygons.map((polygon, index) => (
        <Polygon
          key={index}
          size={polygon.size}
          xPos={polygon.xPos}
          yPos={polygon.yPos}
          rotation={polygon.rotation}
          handleDrag={handleDrag}
          index={index}
        />
      ))}
    </div>
  )
}
;``
