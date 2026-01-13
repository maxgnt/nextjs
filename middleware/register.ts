import { IRegister } from "@/interfaces/user";
 
 
export const MRegister = (user: IRegister) => {
    const { firstname, lastname, email, password, confirmPassword } = user;
 
        const errors = [];
 
      
        if (!firstname || firstname.length < 2 || firstname.length > 50) {
            errors.push({ error: true, message: "Firstname must be between 2 and 50 characters", code: "E01" });
        }
 
       
        if (!lastname || lastname.length < 2 || lastname.length > 50) {
            errors.push({ error: true, message: "Lastname must be between 2 and 50 characters", code: "E02" });
        }
 
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            errors.push({ error: true, message: "Email is not valid", code: "E03" });
        }
 
  
        if (!password || password.length < 8) {
            errors.push({ error: true, message: "Password must be at least 8 characters", code: "E04" });
        }
 
             
                if (password !== confirmPassword) {
                    errors.push({ error: true, message: "Passwords do not match", code: "E05" });
                }
       
                return errors;
        }