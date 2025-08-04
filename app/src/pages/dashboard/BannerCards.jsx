import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

function BannerCards() {
    return (
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <Card>
            <CardContent className="pt-4">
              <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">Loans</span>
              <p className="mt-2 text-sm font-medium">Learn more about Loans – Keep your Bitcoin, access its value without selling it</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-700 text-white">
            <CardContent className="pt-4">
              <span className="text-xs font-semibold">Contact</span>
              <p className="mt-2 text-sm font-medium">Learn more about our real estate, mortgage, and corporate account services</p>
            </CardContent>
          </Card>
        </div>
      )
    }
    
export default BannerCards