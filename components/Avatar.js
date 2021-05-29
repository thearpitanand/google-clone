const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      className={`h-10 transition duration-150 transform rounded-full cursor-pointer hover:scale-110 ${className}`}
      src={url}
      alt="Profile Picture"
    />
  );
};

export default Avatar;
