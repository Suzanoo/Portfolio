import { Howl, Howler } from "howler";
import typingSound from "../public/sound/typewriter.mp3";

class SoundPlayer {
  constructor() {
    this.sound = null;
    Howler.volume(0.5);
  }

  playSound() {
    if (!this.sound) {
      this.sound = new Howl({
        src: [typingSound],
        loop: true,
      });
    }

    if (!this.sound.playing()) {
      this.sound.play();
    }
  }

  stopSound() {
    if (this.sound && this.sound.playing()) {
      this.sound.stop();
    }
  }
}

export default SoundPlayer;
