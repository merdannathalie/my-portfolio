function Footnote() {
  return (
    <div className="fixed bottom-0 left-0 w-full p-4 text-center text-xs text-gray-500 z-50">
      <p>
        © {new Date().getFullYear()} Nathalie Merdan. All rights reserved.
      </p>
    </div>
  );
}
export default Footnote;