import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch"

describe("Pruebas en helper Fetch",()=>{

    let token = "";

    test("Fetch sin token debe funcionar", async ()=>{
        const resp = await fetchWithoutToken('auth/login',{ email:"daniel1234@hotmail.com", password:"123456789" }, 'POST');
        expect(resp instanceof Response).toBe(true);
    
        const body = await resp.json();
        expect(body.ok).toBe(true);

        token = body.access_token;
    })
    test("Fetch con token debe funcionar", async ()=>{
        
        localStorage.setItem("token",token);
        const resp = await fetchWithToken("tasks",{},"GET");
        const body = await resp.json();

        expect(body.ok).toBe(true);
    })
})