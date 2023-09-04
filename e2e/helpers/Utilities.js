class Utilities {
  async sleep(miliseconds) {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
  }
}

export default new Utilities();
