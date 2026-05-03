interface GoldAvailabilityProps {
  spotsRemaining?: number;
  capacity?: number;
}

export default function GoldAvailability({
  spotsRemaining = 164,
  capacity = 200,
}: GoldAvailabilityProps) {
  const filled = Math.max(0, Math.min(capacity, capacity - spotsRemaining));
  const fillPercent = capacity > 0 ? (filled / capacity) * 100 : 0;

  return (
    <div className="tier-availability">
      <div className="tier-availability-label">Availability</div>
      <p className="tier-availability-value">
        <span className="tier-availability-number">{spotsRemaining}</span>
        <span className="tier-availability-text">
          {" of "}
          {capacity}
          <span className="tier-availability-spots"> spots</span>
          {" remaining"}
        </span>
      </p>
      <div className="tier-availability-rail" aria-hidden="true">
        <div
          className="tier-availability-fill"
          style={{ width: `${fillPercent}%` }}
        />
      </div>
    </div>
  );
}
