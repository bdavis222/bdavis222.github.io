interface Props {
  fullText: string;
}

function Abstract({ fullText }: Props) {
  return (
    <p className="publication-abstract">
      <strong>Abstract: </strong>
      {fullText}
    </p>
  );
}

export default Abstract;
