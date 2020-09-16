export class User {
    constructor(
        public name: string,
        public email: string,
        public date: number,
        public password: string,
        public confirmpassword: string,
    ){}
}
