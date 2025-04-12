// app/pages/selection/page.tsx
import React, { Suspense } from 'react'
import SelectionClient from '@/components/selectionclient/SelectionClient'

export default function SelectionPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SelectionClient />
    </Suspense>
  )
}
