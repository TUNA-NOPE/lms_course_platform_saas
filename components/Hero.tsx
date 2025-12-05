export default function Hero() {
  return (
    <div className="relative h-[45vh] w-full pt-16">

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Knowledge Has No Price Tag
          </h1>
          <p className="text-xl text-muted-foreground">
            Master the markets, understand the economy — all for free.
            No paywalls, no barriers. Just you and your next breakthrough.
          </p>
        </div>
      </div>
    </div>
  );
}
