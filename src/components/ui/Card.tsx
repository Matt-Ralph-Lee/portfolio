type Props = {
  width: string;
  height: string;
};

export default function Card({ width, height }: Props) {
  return (
    <>
      <div
        className={`${width} ${height} bg-contentbase shadow-3xl rounded-xl md:rounded-3xl`}
      ></div>
    </>
  );
}
