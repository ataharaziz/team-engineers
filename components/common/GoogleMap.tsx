export default function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d186.1609153164455!2d74.86680679289617!3d12.818495791795291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1784838435956!5m2!1sen!2sin"
        className="h-[350px] w-full"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}