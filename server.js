const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// info lang 
let hycinthInfo = {
  fullName: "HYCINTH MAE G. BAGSAC",
  classSection: "BSIT NT 4101",
  quote: "As is our confidence, so is our capacity",
  meaning: "This quote tells us that how much we believe in ourselves directly affects what we can achieve in life. When we feel confident and trust our abilities, we naturally perform better and reach higher goals. On the other hand, when we doubt ourselves, we hold back and limit our own potential.\n\nConfidence gives us the courage to try new things, face challenges, and keep going even when things get tough. It's like having a special power inside us that grows stronger the more we believe in it.\n\nBy building our confidence day by day, we unlock more of our true capacity and become capable of amazing things."
};

// for design 
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hycinth's Cave</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #c8e6c9;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          max-width: 500px;
          width: 90%;
        }
        
        .header-section {
          background-color: #d4e7d4;
          padding: 35px 25px;
          border-radius: 12px;
          margin-bottom: 20px;
          border: 2px solid #b8d4b8;
        }
        
        .header-section h1 {
          color: #5a7c5a;
          text-align: center;
          margin: 0 0 20px 0;
          font-size: 32px;
          font-weight: 700;
          letter-spacing: 1px;
          border: none;
          padding: 0;
        }
        
        .badge {
          background-color: #8fa88f;
          color: white;
          padding: 10px 24px;
          border-radius: 25px;
          display: inline-block;
          font-size: 15px;
          font-weight: 500;
          margin-top: 5px;
        }
        
        .quote-box {
          background-color: #f1f8e9;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
          border-left: 4px solid #7cb342;
        }
        
        .quote {
          font-style: italic;
          font-size: 16px;
          color: #558b2f;
          margin-bottom: 15px;
        }
        
        .arrow-btn {
          background-color: transparent;
          color: #7cb342;
          border: none;
          padding: 5px 0;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
        }
        
        .arrow-btn:hover {
          color: #558b2f;
        }
        
        .meaning-box {
          display: none;
          background-color: white;
          padding: 15px;
          border-radius: 8px;
          margin-top: 15px;
          border-top: 1px solid #c5e1a5;
        }
        
        .meaning-box p {
          color: #5d6d5b;
          line-height: 1.6;
          text-align: justify;
          margin: 0 0 12px 0;
          font-size: 14px;
        }
        
        .meaning-box p:last-child {
          margin-bottom: 0;
        }

        .meaning-box.show {
          display: block;
        }
        
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #7cb342;
          font-size: 14px;
        }
        
        .footer .heart {
          color: #66bb6a;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header-section">
          <h1>${hycinthInfo.fullName}</h1>
          <div style="text-align: center;">
            <span class="badge">${hycinthInfo.classSection}</span>
          </div>
        </div>
        
        <div class="quote-box">
          <p class="quote">"${hycinthInfo.quote}"</p>
          <button class="arrow-btn" onclick="toggleMeaning()">
            <span id="btnText">Show meaning ▼</span>
          </button>
          
            <div class="meaning-box" id="meaningBox">
                <p>This quote tells us that how much we believe in ourselves directly affects what we can achieve in life. When we feel confident and trust our abilities, we naturally perform better and reach higher goals. On the other hand, when we doubt ourselves, we hold back and limit our own potential.</p>
                <p>Confidence gives us the courage to try new things, face challenges, and keep going even when things get tough. It's like having a special power inside us that grows stronger the more we believe in it.</p>
                <p>By building our confidence day by day, we unlock more of our true capacity and become capable of amazing things.</p>
            </div>
        </div>
        
        <div class="footer">
          <p>© 2025 Hycinth's Cave <span class="heart">💚</span> | GitHub Codespaces & Render Deployment</p>
        </div>
      </div>
      
      <script>
        function toggleMeaning() {
          var meaningBox = document.getElementById('meaningBox');
          var btnText = document.getElementById('btnText');
          
          if (meaningBox.classList.contains('show')) {
            meaningBox.classList.remove('show');
            btnText.textContent = 'Show meaning ▼';
          } else {
            meaningBox.classList.add('show');
            btnText.textContent = 'Hide meaning ▲';
          }
        }
      </script>
    </body>
    </html>
  `);
});

// para sa server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
});