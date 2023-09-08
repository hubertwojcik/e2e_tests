class TestData {
  constructor() {
    //First
    this.name_1;
    this.surname_1;
    this.email_1;
    this.startDate_1;
    this.id_1;
    //Second
    this.name_2;
    this.surname_2;
    this.email_2;
    this.id_2;
    this.startDate_2;
    // Tag
    this.lastTag;
  }

  //First

  getName_1() {
    return this.name_1;
  }
  setName_1(name_1) {
    this.name_1 = name_1;
  }
  getSurname_1() {
    return this.surname_1;
  }
  setSurname_1(surname_1) {
    this.surname_1 = surname_1;
  }

  getEmail_1() {
    return this.email_1;
  }
  setEmail_1(email) {
    this.email_1 = email;
  }

  getStartDate_1() {
    return this.startDate_1;
  }

  setStartDate_1(startDate_1) {
    this.startDate_1 = startDate_1;
  }

  getId_1() {
    return this.id_1;
  }
  setId_1(id_1) {
    this.id_1 = id_1;
  }

  //Second
  getName_2() {
    return this.name_2;
  }
  setName_2(name_2) {
    this.name_2 = name_2;
  }
  getSurname_2() {
    return this.surname_2;
  }
  setSurname_2(surname_2) {
    this.surname_2 = surname_2;
  }

  getEmail_2() {
    return this.email_2;
  }
  setEmail_2(email) {
    this.email_2 = email;
  }

  getStartDate_2() {
    return this.startDate_2;
  }

  setStartDate_2(startDate_2) {
    this.startDate_2 = startDate_2;
  }

  getId_2() {
    return this.id_2;
  }
  setId_2(id_2) {
    this.id_2 = id_2;
  }

  // Tag
  getLastTag() {
    return this.lastTag;
  }
  setLastTag(lastTag) {
    this.lastTag = lastTag;
  }
}

export default new TestData();
