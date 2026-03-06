// components/LoadingScreen.tsx


interface LoadingScreenProps {
  bg: string;
  muted: string;
}

export default function LoadingScreen({ bg, muted }: LoadingScreenProps) {
  return (
    <div className={`min-h-screen flex items-center justify-center ${bg}`}>
      <div className="text-center">
        <div
          className="text-6xl mb-4"
          style={{ animation: "spin 2s linear infinite", display: "inline-block" }}
        >
          ☕
        </div>
        <p className={`font-serif text-xl animate-pulse ${muted}`}>
          Brewing something beautiful…
        </p>
      </div>
    </div>
  );
}
