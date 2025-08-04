import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

function CurrentPriceChart() {
    return (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Current Price</CardTitle>
            <div className="flex items-baseline gap-2">
              <p className="text-xl font-bold">₹26,670.25</p>
              <span className="text-green-600 text-xs font-semibold flex items-center"><ArrowUpRight className="h-3 w-3" /> 0.04%</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Button size="sm">Buy</Button>
              <Button size="sm">Sell</Button>
            </div>
            <Tabs defaultValue="1H" className="mt-2">
              <TabsList>
                <TabsTrigger value="1H">1H</TabsTrigger>
                <TabsTrigger value="1D">1D</TabsTrigger>
                <TabsTrigger value="1W">1W</TabsTrigger>
                <TabsTrigger value="1M">1M</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            {/* Replace with chart logic */}
            <div className="h-32 bg-purple-100 rounded-md"></div>
          </CardContent>
        </Card>
      )
    }

export default CurrentPriceChart