const keyToSoundFile = {
  F1: "key01.mp3",
  G1: "key02.mp3",
  A1: "key03.mp3",
  B1: "key04.mp3",
  C1: "key05.mp3",
  D1: "key06.mp3",
  E1: "key07.mp3",
  F2: "key08.mp3",
  G2: "key09.mp3",
  A2: "key10.mp3",
  B2: "key11.mp3",
  C2: "key12.mp3",
  D2: "key13.mp3",
  E2: "key14.mp3",
  F3: "key15.mp3",
  G3: "key16.mp3",
  A3: "key17.mp3",
  B3: "key18.mp3",
  C3: "key19.mp3",
  D3: "key20.mp3",
  E3: "key21.mp3",
  F4: "key22.mp3",
  G4: "key23.mp3",
  A4: "key24.mp3",
};

document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", () => {
    let note = key.id;
    let audio = new Audio("assets/sounds/" + keyToSoundFile[note]);
    audio.play();
    console.log("key pressed", note);
  });
});
