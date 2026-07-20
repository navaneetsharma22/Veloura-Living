/**
 * Veloura Living - Hero Left Column (Placeholder)
 * Handles layout for Badge, Heading, Paragraph, and CTAs.
 */
export function HeroLeftColumn() {
  return (
    <div className="flex flex-col justify-center h-full w-full max-w-2xl lg:pr-12 pt-32 pb-16 lg:py-0">
      {/* Badge Placeholder */}
      <div className="h-6 w-32 bg-neutral-300/50 rounded-full mb-6" />
      
      {/* Large Heading Placeholder */}
      <div className="flex flex-col space-y-4 mb-8">
        <div className="h-16 w-full max-w-[80%] bg-neutral-400/50 rounded-sm" />
        <div className="h-16 w-full max-w-[60%] bg-neutral-400/50 rounded-sm" />
      </div>
      
      {/* Paragraph Placeholder */}
      <div className="flex flex-col space-y-3 mb-10">
        <div className="h-4 w-full bg-neutral-300/50 rounded-sm" />
        <div className="h-4 w-[90%] bg-neutral-300/50 rounded-sm" />
        <div className="h-4 w-[75%] bg-neutral-300/50 rounded-sm" />
      </div>
      
      {/* CTAs Placeholder */}
      <div className="flex items-center space-x-6">
        <div className="h-14 w-40 bg-neutral-400/60 rounded-sm" />
        <div className="h-14 w-40 bg-transparent border border-neutral-400/60 rounded-sm" />
      </div>
    </div>
  );
}
