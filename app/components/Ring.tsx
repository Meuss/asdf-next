'use client'

export const Ring = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1200 798.5'
      className='pointer-events-none absolute inset-0'
    >
      <defs>
        <clipPath id='ringPath'>
          <path
            d='M791.5 399C791.5 504.765 705.765 590.5 600 590.5C494.235 590.5 408.5 504.765 408.5 399C408.5 293.235 494.235 207.5 600 207.5C705.765 207.5 791.5 293.235 791.5 399ZM494.54 399C494.54 457.244 541.755 504.46 600 504.46C658.245 504.46 705.46 457.244 705.46 399C705.46 340.756 658.245 293.54 600 293.54C541.755 293.54 494.54 340.756 494.54 399Z'
            fill='black'
          />
        </clipPath>
        <clipPath id='inverseRingPath'>
          <path
            d='M791.5 399C791.5 504.765 705.765 590.5 600 590.5C494.235 590.5 408.5 504.765 408.5 399C408.5 293.235 494.235 207.5 600 207.5C705.765 207.5 791.5 293.235 791.5 399ZM494.54 399C494.54 457.244 541.755 504.46 600 504.46C658.245 504.46 705.46 457.244 705.46 399C705.46 340.756 658.245 293.54 600 293.54C541.755 293.54 494.54 340.756 494.54 399Z'
            fill='white'
          />
          <rect x='0' y='0' width='1200' height='798.5' fill='black' />
        </clipPath>
      </defs>
    </svg>
  )
}
