const HEAD = (
  <div
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: '-20px',
    }}
  />
);

const BODY = (
  <div
    style={{
      width: '10px',
      height: '100px',
      background: 'black',
      position: 'absolute',
      top: '90px',
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '-100px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '10px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '180px',
      right: '-90px',
      rotate: '60deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '180px',
      right: 0,
      rotate: '-60deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

export function HangmanDrawing({ consecutiveIncorrectAnswers }) {
  const numberOfGuesses = Math.min(
    consecutiveIncorrectAnswers,
    BODY_PARTS.length
  );
  return (
    <div style={{ position: 'relative' }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: '50px',
          width: '10px',
          background: 'black',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />

      <div
        style={{
          height: '10px',
          width: '150PX',
          background: 'black',
          marginLeft: '100px',
        }}
      />
      <div
        style={{
          height: '250px',
          width: '10px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div style={{ height: '10px', width: '150px', background: 'black' }} />
    </div>
  );
}
