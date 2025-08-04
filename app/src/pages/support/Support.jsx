import React from "react";
import { ContactForm } from "./ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function Support() {
  return (
    <div className="grid lg:grid-cols-2 gap-6 grid-cols-1">
      <div>
        <div className="mb-3">
          <h2 className="font-medium text-3xl">Contact Us</h2>
          <p className="text-sm">
            Have a question or just want to know more? Feel free to reach out to
            us.
          </p>
        </div>
        <ContactForm />
      </div>
      <div>
        <div className="mb-3">
          <h2 className="font-medium text-3xl">Live Chat</h2>
          <p className="text-sm">
            Don’t have time to wait for the answer? Chat with us now.
          </p>
        </div>
        <Card className="bg-purple-700 text-white">
          <CardContent className="pt-4">
            <Badge variant={"outline"}>Chatbot</Badge>
            <p className="mt-2 text-sm font-medium">Chat with us now</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Support;
