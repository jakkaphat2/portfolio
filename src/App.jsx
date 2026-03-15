import { useEffect, useState } from 'react'

const skills = [
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Vite',
  'Node.js',
  'Express',
  'Python',
  'FastAPI',
  'MySQL',
  'Firebase',
  'Git & GitHub',
]

const strengths = [
  {
    title: 'เรียนรู้ไวและปรับตัวเร็ว',
    description:
      'สามารถศึกษาเทคโนโลยีใหม่และนำมาประยุกต์ใช้กับงานจริงได้รวดเร็ว โดยเฉพาะงานพัฒนาเว็บและระบบที่ต้องเชื่อมหลายส่วนเข้าด้วยกัน',
  },
  {
    title: 'คิดเป็นระบบ',
    description:
      'ชอบวางโครงสร้างการทำงานให้ชัดเจน แยกปัญหาออกเป็นส่วนย่อย ทำให้พัฒนา แก้บั๊ก และต่อยอดระบบได้ง่ายขึ้น',
  },
  {
    title: 'ใส่ใจประสบการณ์ผู้ใช้',
    description:
      'ให้ความสำคัญกับหน้าตาเว็บ ความลื่นไหล การจัดวางข้อมูล และความรู้สึกของผู้ใช้ เพื่อให้ผลงานดูมืออาชีพและใช้งานได้จริง',
  },
]

const certificateItems = [
  {
    title: 'เทคโนโลยีเครื่องจักรอัตโนมัติในงานอุตสาหกรรม',
    issuer: 'Madesco Intelligence Co., Ltd.',
    image: '/certificates/cert-1.jpg',
    description:
      'เกียรติบัตรใบนี้สะท้อนถึงการเข้าร่วมการเรียนรู้ด้านเทคโนโลยีเครื่องจักรอัตโนมัติในงานอุตสาหกรรม ซึ่งช่วยเสริมความเข้าใจเกี่ยวกับระบบอัตโนมัติ กระบวนการทำงานของเครื่องจักร และการประยุกต์ใช้เทคโนโลยีในภาคการผลิต ถือเป็นพื้นฐานสำคัญที่ต่อยอดสู่การพัฒนาทักษะด้านเทคโนโลยีและการทำงานเชิงระบบได้อย่างมีประสิทธิภาพ',
  },
  {
    title: 'การแข่งขันฝีมือแรงงานแห่งชาติ',
    issuer: 'กระทรวงแรงงาน',
    image: '/certificates/cert-2.jpg',
    description:
      'เกียรติบัตรใบนี้แสดงถึงการเข้าร่วมการแข่งขันฝีมือแรงงานแห่งชาติ ครั้งที่ 29 ระดับภาค กลุ่มจังหวัดภาคกลาง ในสาขาอิเล็กทรอนิกส์ ซึ่งสะท้อนถึงความสนใจและความสามารถด้านงานอิเล็กทรอนิกส์ การแก้ปัญหาเชิงเทคนิค และความพร้อมในการพัฒนาทักษะวิชาชีพผ่านการลงมือปฏิบัติจริงในเวทีการแข่งขัน',
  },
]

const academicDocuments = [
  {
    title: 'Transcript',
    issuer: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ',
    image: '/documents/transcript.jpg',
  },
]

const contactItems = [
  {
    label: 'Email',
    value: 'ส่งอีเมลหาฉัน',
    href: 'mailto:s6703052411244@email.kmutnb.ac.th',
  },
  {
    label: 'GitHub',
    value: 'github.com/jakkaphat2',
    href: 'https://github.com/jakkaphat2',
  },
  {
    label: 'Location',
    value: 'Thailand',
    href: 'https://www.google.com/maps/place/Thailand',
  },
]

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function ImageWithFallback({ src, alt, className, fallback }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return fallback
  }

  return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} />
}

function PreviewCard({ item, type, onOpen }) {
  return (
    <article className="glass-card certificate-card">
      <button type="button" className="image-button" onClick={() => onOpen(item)}>
        <div className="certificate-image-wrap">
          <ImageWithFallback
            src={item.image}
            alt={item.title}
            className="certificate-image"
            fallback={
              <div className="certificate-placeholder">
                <span>{type === 'document' ? 'Document Preview' : 'Certificate Preview'}</span>
                <strong>{item.title}</strong>
              </div>
            }
          />
          <div className="zoom-chip">กดเพื่อดูภาพใหญ่</div>
        </div>
      </button>
      <div className="certificate-body">
        <span className="certificate-tag">{type === 'document' ? 'Academic Document' : 'Certificate'}</span>
        <h3>{item.title}</h3>
        <p className="certificate-issuer">{item.issuer}</p>
        <p>{item.description}</p>
      </div>
    </article>
  )
}

function App() {
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    if (!selectedItem) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedItem(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedItem])

  return (
    <div className="app-shell">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-grid"></div>

      <header className="navbar">
        <div className="brand">
          <div className="brand-mark">JT</div>
          <div>
            <strong>จักรพรรดิ ทองศรี</strong>
            <span>Developer Portfolio</span>
          </div>
        </div>

        <nav>
          <a href="#skills">Skills</a>
          <a href="#certificates">Certificates</a>
          <a href="#documents">Transcript</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy glass-card">
            <span className="hero-badge">Available for Internship / Junior Developer Opportunities</span>
            <h1>
              สวัสดีครับ ผม <span>จักรพรรดิ ทองศรี</span>
            </h1>
            <h2>ชื่อเล่น ฟลุ๊ค — Developer ที่สนใจการสร้างเว็บไซต์สมัยใหม่ให้สวย ใช้งานง่าย และต่อยอดได้จริง</h2>
            <p>
              ปัจจุบันกำลังศึกษาที่ <strong>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</strong>{' '}
              และมุ่งพัฒนาตัวเองในสาย <strong>Developer</strong> โดยเฉพาะงานที่เกี่ยวข้องกับ Frontend, Web Interface
              และการเชื่อมระบบให้เป็นประสบการณ์ที่ลื่นไหลสำหรับผู้ใช้.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#certificates">
                ดูเกียรติบัตร
              </a>
              <a className="btn btn-secondary" href="#documents">
                ดู Transcript
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>Developer</strong>
                <span>สายงานที่สนใจ</span>
              </div>
              <div>
                <strong>React</strong>
                <span>Tech ที่ใช้ทำเว็บ</span>
              </div>
              <div>
                <strong>KMITNB</strong>
                <span>สถาบันการศึกษา</span>
              </div>
            </div>
          </div>

          <div className="hero-visual glass-card">
            <div className="profile-frame">
              <ImageWithFallback
                src="/profile.jpg"
                alt="รูปโปรไฟล์ของจักรพรรดิ ทองศรี"
                className="profile-image"
                fallback={
                  <div className="avatar-ring">
                    <div className="avatar-core">ฟ</div>
                  </div>
                }
              />
            </div>
          </div>
        </section>

        <section className="container section-gap">
          <SectionTitle eyebrow="Strengths" title="จุดเด่นที่สะท้อนสไตล์การทำงาน" />

          <div className="grid three-columns">
            {strengths.map((item) => (
              <article key={item.title} className="glass-card content-card feature-card">
                <div className="feature-icon">✦</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="container section-gap">
          <SectionTitle eyebrow="Skills" title="ทักษะที่พร้อมต่อยอดสู่การทำงานจริง" />

          <div className="glass-card skills-card">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="container section-gap">
          <div className="grid two-columns">
            <article className="glass-card content-card">
              <h3>Education</h3>
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <div>
                  <strong>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</strong>
                  <p>กำลังศึกษาอยู่ และมุ่งพัฒนาทักษะด้านซอฟต์แวร์ เว็บแอปพลิเคชัน และการแก้ปัญหาเชิงระบบ</p>
                </div>
              </div>
            </article>

            <article className="glass-card content-card">
              <h3>Future Goal</h3>
              <p>
                เป้าหมายของผมคือการเติบโตเป็น developer ที่สามารถออกแบบและพัฒนาระบบได้อย่างครบมุมมากขึ้น
                ทั้งในด้านโค้ด คุณภาพงาน และประสบการณ์ผู้ใช้ พร้อมสร้างผลงานที่ใช้งานได้จริงและมีคุณค่าต่อผู้คน.
              </p>
              <p>
                ในระยะยาว ผมต้องการพัฒนาตัวเองให้มีความพร้อมสำหรับการทำงานในทีมมืออาชีพ และมีความสามารถเพียงพอในการสร้างผลิตภัณฑ์ดิจิทัลที่ทั้งสวย ฉลาด และมีประสิทธิภาพ.
              </p>
            </article>
          </div>
        </section>

        <section id="certificates" className="container section-gap">
          <SectionTitle
            eyebrow="Certificates"
            title="เกียรติบัตรและผลงานรับรอง"
            description="รวมเกียรติบัตรที่สะท้อนการเรียนรู้ ความพยายาม และประสบการณ์"
          />

          <div className="certificate-grid">
            {certificateItems.map((item) => (
              <PreviewCard key={item.title} item={item} type="certificate" onOpen={setSelectedItem} />
            ))}
          </div>
        </section>

        <section id="documents" className="container section-gap">
          <SectionTitle eyebrow="Academic Documents" title="Transcript" />

          <div className="certificate-grid">
            {academicDocuments.map((item) => (
              <PreviewCard key={item.title} item={item} type="document" onOpen={setSelectedItem} />
            ))}
          </div>
        </section>

        <section id="contact" className="container section-gap">
          <div className="glass-card contact-card">
            <SectionTitle eyebrow="Contact" title="Contact" />

            <div className="contact-grid">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  className="contact-link-card"
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <p>© 2026 จักรพรรดิ ทองศรี (ฟลุ๊ค) — Developer Portfolio</p>
      </footer>

      {selectedItem && (
        <div className="modal-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setSelectedItem(null)} aria-label="ปิดหน้าต่าง">
              ×
            </button>
            <div className="modal-image-wrap">
              <ImageWithFallback
                src={selectedItem.image}
                alt={selectedItem.title}
                className="modal-image"
                fallback={
                  <div className="certificate-placeholder modal-placeholder">
                    <span>Image Preview</span>
                    <strong>{selectedItem.title}</strong>
                  </div>
                }
              />
            </div>
            <div className="modal-content">
              <span className="certificate-tag">รายละเอียด</span>
              <h3>{selectedItem.title}</h3>
              <p className="certificate-issuer">{selectedItem.issuer}</p>
              <p>{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App