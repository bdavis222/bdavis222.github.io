interface Props {
  fullText: string;
}

function Abstract({ fullText }: Props) {
  return (
    <p className="publication-abstract" style={{ paddingTop: 5 }}>
      <strong>Abstract: </strong>
      {fullText}
    </p>
  );
}

export default Abstract;
