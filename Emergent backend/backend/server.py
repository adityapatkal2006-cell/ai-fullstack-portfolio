import resend  # This is the library you just added to requirements.txt
import os      # This is needed to read your RESEND_API_KEY from Render
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 1. SETUP CORS (So your Vercel frontend can talk to Render)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For now, this allows all origins to talk to your API
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. INITIALIZE RESEND
# This pulls the key you saved in the Render Environment settings
resend.api_key = os.getenv("RESEND_API_KEY")

@app.post("/api/contact")
async def contact_form(request: Request):
    # This reads the data sent from your React website
    data = await request.json()
    
    try:
        # 3. SEND THE EMAIL VIA API (Port 443 - Not blocked by Render)
        params = {
            "from": "Adityaraje's Portfolio <onboarding@resend.dev>",
            "to": "adityapatkal2006@gmail.com",
            "subject": f"Portfolio Message: {data.get('subject', 'No Subject')}",
            "html": f"""
                <p>You have a new message from your portfolio:</p>
                <p><strong>Name:</strong> {data.get('name')}</p>
                <p><strong>Email:</strong> {data.get('email')}</p>
                <p><strong>Message:</strong> {data.get('message')}</p>
            """
        }
        
        # Trigger the actual send
        resend.Emails.send(params)
        
        return {"status": "success", "message": "Email sent successfully!"}
        
    except Exception as e:
        # This will show up in your Render logs if something fails
        print(f"Error sending email: {e}")
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    import uvicorn
    # This matches the uvicorn command you used in your Render settings
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 10000)))