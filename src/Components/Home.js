import React from 'react'
import LoginPage from './LoginPage/LoginPage'
import Footer from './Footer/Footer'

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', fontFamily: 'Hind, -apple-system, Roboto, Helvetica, sans-serif', fontSize: '16px', lineHeight: '1.4' }}>
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)', display: 'flex', width: '100%', padding: '26px 16px', alignItems: 'stretch', gap: '20px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'stretch', gap: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: '32px' }}>
          <div style={{ flexGrow: '1' }}>
            <button style={{ background: 'none', border: 'none', color: 'rgba(36, 57, 83, 1)', fontWeight: '400', cursor: 'pointer' }}>
              Nos questionnaires
            </button>
          </div>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Chat</button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Dashboard</button>
          <button style={{ background: 'none', border: 'none', margin: 'auto 0', cursor: 'pointer' }}>Notification</button>
        </div>
        <button style={{ background: 'none', border: 'none', margin: 'auto 0', cursor: 'pointer' }}>FAQ</button>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: '5px' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>A propos</button>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/caf48153123a6710b35ec0560cb353b9b2068dd7b245a82f79a723b5090d95c0?placeholderIfAbsent=true" alt="Icon" style={{ position: 'relative', display: 'flex', marginTop: '5px', width: '10px' }} />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'stretch', gap: '13px' }}>
        <button style={{ color: 'rgba(36, 57, 83, 1)', fontWeight: '400', margin: 'auto 0', flexGrow: '1', background: 'none', border: 'none', cursor: 'pointer' }}>
          Inscrivez-vous
        </button>
        <div style={{ backgroundColor: 'rgba(17, 43, 67, 0.6)', alignSelf: 'start', display: 'flex', width: '1px', height: '15px' }} />
        <div style={{ display: 'flex', alignItems: 'stretch', gap: '8px', color: 'rgba(67, 154, 151, 1)', fontWeight: '600' }}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f8f26861df25845daa14fca91354a6a8d94cd762d0c9e5e89a5a35a388cb04d?placeholderIfAbsent=true" alt="Suitcase Icon" style={{ position: 'relative', display: 'flex', width: '21px' }} />
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(67, 154, 151, 1)', fontWeight: '600' }}>
            Espace professionnel
          </button>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae2fd9f5115863f38b0b8863efab00f5ffe6c264b41f890a6aca58ee0c47de26?placeholderIfAbsent=true" alt="Professional Icon" style={{ position: 'relative', display: 'flex', width: '10px' }} />
        </div>
      </div>
    </div>
    <LoginPage/>
    <Footer/>
  </div>

  )
}
{/**
    <div>
        <NavBar/>
        <SignUpForm/>
    </div>
 */}
