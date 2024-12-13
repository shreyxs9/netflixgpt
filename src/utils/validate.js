export const validate = (email,password) => {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(password);

    if(!validPassword) return "Invalid password";
    if(!validEmail) return "Invalid email";
return null;
}