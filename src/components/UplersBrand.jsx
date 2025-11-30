export default function UplersBrand({
  size = "w-8",
  textSize = "text-xl",
  className = "",
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/company-icons/uplers-logo.svg"
        alt="uplers logo"
        className={`${size} h-auto`}
      />
      <span className={`${textSize} font-bold text-gray-900`}>
        uplers
      </span>
    </div>
  );
}
