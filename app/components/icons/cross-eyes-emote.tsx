import type { ComponentPropsWithoutRef } from 'react'

type CrossEyesEmoteProps = ComponentPropsWithoutRef<'svg'>

export default function CrossEyesEmote(props: CrossEyesEmoteProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4 17H8v-2h8v2zm-.499-6.296L14.203 12 13 10.796 14.298 9.5 13 8.204 14.203 7l1.298 1.296L16.797 7 18 8.204 16.703 9.5 18 10.796 16.798 12l-1.297-1.296zm-7 0L7.203 12 6 10.796 7.298 9.5 6 8.204 7.203 7l1.298 1.296L9.797 7 11 8.204 9.703 9.5 11 10.796 9.798 12l-1.297-1.296z"
      />
    </svg>
  )
}
