export const metadata = {
  title: 'You Made Better',
  description: 'Planning for a meaningful life'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin:0}}>{children}</body>
    </html>
  )
}
