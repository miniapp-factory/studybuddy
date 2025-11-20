"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface SummarizeProps {
  /** The text to summarize */
  text: string;
}

export function Summarize({ text }: SummarizeProps) {
  const [summary, setSummary] = useState<string[]>([]);

  const generateSummary = () => {
    const sentences = text
      .split(/[.!?]\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    setSummary(sentences);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Summarize Text</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          placeholder="Enter text to summarize"
          value={text}
          readOnly
          className="mb-4"
        />
        <Button onClick={generateSummary} className="mb-4">
          Generate Summary
        </Button>
        {summary.length > 0 && (
          <ul className="list-disc pl-5">
            {summary.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
