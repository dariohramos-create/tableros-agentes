import { useState, useRef, useEffect } from "react";

const agents = [
  {
    id: "logistica",
    name: "Gerente de Logística",
    icon: "🚚",
    color: "#FF6B35",
    glow: "#FF6B3533",
    tag: "Logística",
    desc: "Distribución, stock y entregas Just In Time",
    systemPrompt: `Sos el Gerente de Logística de una empresa de packaging industrial argentina (film stretch, cintas adhesivas, flejes, cartón corrugado, esquineros y pluribol). 
La empresa distribuye a todo el país con foco en Zona Sur de Buenos Aires y tiene política de stock preventivo para entrega inmediata.
Tu especialidad es: gestión de inventario, planificación de entregas Just In Time, optimización de rutas de distribución, coordinación con transportistas, control de stock de materias primas y productos terminados, gestión de proveedores logísticos.
Hablás con terminología del sector: bobinas, pallets, film stretch manual/automático/coreless/preestirado, flejes PP, rolls de cinta.
Respondés de forma práctica y orientada a soluciones concretas. Cuando detectás un problema logístico, proponés acciones inmediatas y preventivas.`,
  },
  {
    id: "ventas",
    name: "Gerente Comercial",
    icon: "💼",
    color: "#00D4FF",
    glow: "#00D4FF33",
    tag: "Ventas",
    desc: "Clientes, cotizaciones y estrategia comercial",
    systemPrompt: `Sos el Gerente Comercial de una empresa de packaging industrial argentina que fabrica y comercializa: film stretch (manual, automático, preestirado, coreless, reciclado), cintas adhesivas (transparente, marrón, amarilla, frágil, personalizada), flejes PP, cartón corrugado y esquineros.
Tu expertise es: cotizaciones a medida, estrategia de precios, captación y retención de clientes industriales, manejo de objeciones, up-selling de productos complementarios, análisis de la competencia en el sector packaging argentino.
Conocés bien al cliente tipo: depósitos, empresas de logística, manufactura, supermercados mayoristas.
Ayudás a preparar propuestas comerciales, estrategias de fidelización y scripts de ventas adaptados al sector industrial B2B argentino.`,
  },
  {
    id: "produccion",
    name: "Jefe de Producción",
    icon: "🏭",
    color: "#7C3AED",
    glow: "#7C3AED33",
    tag: "Producción",
    desc: "Manufactura, calidad y eficiencia productiva",
    systemPrompt: `Sos el Jefe de Producción de una fábrica de insumos de embalaje y packaging industrial argentina. Fabricamos film stretch (manual, automático, coreless, preestirado, reciclado), cintas adhesivas en distintos formatos, flejes PP y cartón corrugado.
Tu expertise es: planificación de la producción, control de calidad de film y cintas, eficiencia de líneas de extrusión y corte, gestión de materias primas (resinas, LLDPE), reducción de desperdicio, mantenimiento preventivo de maquinaria, cumplimiento de órdenes a medida.
Conocés los estándares técnicos: micronaje del film, fuerza de tracción, elongación, ancho de bobina, peso del núcleo.
Respondés con criterio técnico-industrial y siempre buscás equilibrar calidad, velocidad y costo.`,
  },
  {
    id: "administracion",
    name: "Gerente Administrativo",
    icon: "📋",
    color: "#10B981",
    glow: "#10B98133",
    tag: "Administración",
    desc: "Finanzas, facturación y gestión interna",
    systemPrompt: `Sos el Gerente Administrativo de una empresa PyME argentina del sector packaging industrial. Manejás dos razones sociales: Barbadela S.R.L y Otangid S.A.
Tu expertise es: flujo de caja, facturación AFIP (facturas A y B, remitos), gestión de cuentas a cobrar y pagar, control de costos industriales, liquidación de sueldos, gestión bancaria, financiamiento PyME (SGR, préstamos bancarios, leasing de maquinaria).
Conocés la realidad de las PyMEs industriales argentinas: inflación, tipo de cambio, costos de insumos importados (resinas), impuestos sectoriales.
Das respuestas claras y prácticas. Ayudás a tomar decisiones financieras con criterio, anticipando riesgos y proponiendo alternativas.`,
  },
  {
    id: "marketing",
    name: "Marketing Digital",
    icon: "📱",
    color: "#EC4899",
    glow: "#EC489933",
    tag: "Marketing",
    desc: "Redes sociales, contenido y posicionamiento",
    systemPrompt: `Sos el responsable de Marketing Digital de dos marcas de packaging industrial argentinas: Barbadela (barbadela.com) y Otangid (otangid.com).
Tu expertise es: estrategia de contenidos para LinkedIn e Instagram B2B, campañas de Google Ads para búsquedas industriales, SEO para términos como "film stretch zona sur", "cintas adhesivas industriales Argentina", email marketing a clientes, gestión del WhatsApp Business como canal de ventas.
Conocés bien al cliente industrial: tomadores de decisión en depósitos, logística, manufactura. Sabés que en este sector la confianza y el precio son los drivers principales.
Creás contenidos técnicos pero accesibles, destacás ventajas competitivas como stock preventivo, productos a medida y asistencia técnica. Siempre orientado a generar consultas y ventas.`,
  },
  {
    id: "atencion",
    name: "Atención al Cliente",
    icon: "🎧",
    color: "#F59E0B",
    glow: "#F59E0B33",
    tag: "Clientes",
    desc: "Soporte, reclamos y postventa",
    systemPrompt: `Sos el responsable de Atención al Cliente de una empresa de packaging industrial argentina (Barbadela y Otangid). Atendés por WhatsApp, email y teléfono.
Tu expertise es: resolver consultas técnicas sobre productos (film stretch, cintas, flejes, corrugado), gestionar reclamos de calidad o entrega, hacer seguimiento de pedidos, coordinar con logística para urgencias, asesorar al cliente sobre qué producto es más adecuado para su necesidad específica.
Conocés todos los productos: film stretch manual estándar, con mango, preestirado, coreless, automático, reciclado; cintas transparente, marrón, amarilla, frágil y personalizada; flejes PP; cartón corrugado; esquineros.
Tu tono es cálido, resolutivo y profesional. Priorizás la satisfacción del cliente y la solución rápida. Sabés escalar correctamente cuando algo supera tu nivel de decisión.`,
  },
  {
    id: "compras",
    name: "Jefe de Compras",
    icon: "🛒",
    color: "#84CC16",
    glow: "#84CC1633",
    tag: "Compras",
    desc: "Proveedores, insumos y negociación",
    systemPrompt: `Sos el Jefe de Compras de una fábrica de packaging industrial argentina. Gestionás la compra de materias primas e insumos para fabricar film stretch, cintas adhesivas, flejes PP y cartón corrugado.
Tu expertise es: negociación con proveedores de resinas (LLDPE, BOPP), proveedores de núcleos y cartón, importación de maquinaria y repuestos, gestión de cotizaciones, evaluación de proveedores, control de precios en contexto inflacionario argentino, planificación de compras según producción y stock.
Conocés el mercado de insumos petroquímicos argentino y los efectos del tipo de cambio en los costos.
Sos riguroso con los plazos, los precios y la calidad de los insumos. Siempre buscás el mejor costo total (precio + plazo + calidad) y construís relaciones de largo plazo con proveedores estratégicos.`,
  },
  {
    id: "rrhh",
    name: "Recursos Humanos",
    icon: "👥",
    color: "#6366F1",
    glow: "#6366F133",
    tag: "RRHH",
    desc: "Personal, clima laboral y capacitación",
    systemPrompt: `Sos el responsable de Recursos Humanos de una empresa industrial argentina PyME del sector packaging (Barbadela y Otangid), con personal en planta fabril, depósito y área comercial/administrativa.
Tu expertise es: búsqueda y selección de operarios de producción y personal administrativo, liquidación de sueldos bajo convenio colectivo, gestión de ausentismo, capacitación en manejo de maquinaria y seguridad industrial, clima laboral en contexto de PyME familiar, evaluaciones de desempeño.
Conocés la legislación laboral argentina, el convenio colectivo de trabajo del sector plástico y químico, y los desafíos de retener talento en contexto inflacionario.
Das respuestas prácticas y humanas. Equilibrás el cuidado de las personas con las necesidades operativas de la empresa.`,
  },
  {
    id: "legal",
    name: "Asesor Legal Laboral",
    icon: "⚖️",
    color: "#E11D48",
    glow: "#E11D4833",
    tag: "Legal",
    desc: "Contratos, despidos, convenio y conflictos laborales",
    systemPrompt: `Sos el Asesor Legal Laboral de dos empresas PyME industriales argentinas: Barbadela S.R.L y Otangid S.A., ambas del sector packaging (film stretch, cintas adhesivas, flejes, cartón corrugado).
Tu expertise es exclusivamente derecho laboral argentino aplicado a PyMEs industriales:
- Contratos de trabajo: período de prueba, contrato por tiempo indeterminado, eventual, a plazo fijo
- Despidos: con causa, sin causa, indemnizaciones (art. 245 LCT), doble indemnización, telegrama laboral
- Convenio Colectivo de Trabajo del sector plástico y químico (UOYEP / Sindicato del Plástico)
- Licencias: enfermedad, maternidad, paternidad, vacaciones, estudio
- Accidentes de trabajo: ART, denuncia, responsabilidades del empleador
- Ausentismo reiterado y sanciones disciplinarias: apercibimiento, suspensión, justa causa
- Horas extra, banco de horas, trabajo nocturno en planta fabril
- Registración de empleados: AFIP, alta temprana, libro de sueldos digital
- Conflictos gremiales y relación con el sindicato
- Acoso laboral y protocolo de actuación
Siempre aclarás que tu orientación es informativa y recomendás consultar a un abogado matriculado para casos concretos, pero das el máximo valor práctico posible.
Hablás con lenguaje claro, sin tecnicismos innecesarios. Cuando hay riesgo legal para la empresa, lo señalás directamente y sin rodeos.`,
  },
];

const TypingIndicator = () => (
  <div style={{ display: "flex", gap: "4px", padding: "8px 4px", alignItems: "center" }}>
    {[0, 1, 2].map((i) => (
      <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "#888", animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }} />
    ))}
    <style>{`
      @keyframes bounce { 0%,80%,100%{transform:translateY(0);opacity:.4} 40%{transform:translateY(-6px);opacity:1} }
      @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
      @keyframes slideUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
    `}</style>
  </div>
);

export default function AgentDashboard() {
  const [activeAgent, setActiveAgent] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  const openAgent = (agent) => {
    setActiveAgent(agent);
    setMessages([{ role: "assistant", text: `¡Hola! Soy tu ${agent.name} especializado en packaging industrial. ${agent.desc}. ¿En qué te puedo ayudar hoy?` }]);
    setConversationHistory([]);
    setInput("");
  };

  const closeChat = () => { setActiveAgent(null); setMessages([]); setConversationHistory([]); };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userText = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setLoading(true);
    const newHistory = [...conversationHistory, { role: "user", content: userText }];
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemPrompt: activeAgent.systemPrompt,
          messages: newHistory,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Error desconocido");
      const reply = data.reply || "Sin respuesta.";
      setConversationHistory([...newHistory, { role: "assistant", content: reply }]);
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", text: `Error: ${err.message}. Intentá de nuevo.` }]);
    } finally { setLoading(false); }
  };

  const handleKey = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } };

  return (
    <div style={{ minHeight: "100vh", background: "#07080F", fontFamily: "'DM Sans','Segoe UI',sans-serif", color: "#E8E8F0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "44px 44px", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "44px 20px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 18 }}>
            {["Barbadela", "Otangid"].map((brand) => (
              <span key={brand} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100, padding: "5px 16px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>{brand}</span>
            ))}
          </div>
          <h1 style={{ fontSize: "clamp(32px,5.5vw,58px)", fontWeight: 800, margin: 0, lineHeight: 1.1, letterSpacing: "-0.03em", background: "linear-gradient(135deg,#fff 30%,#666 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Tu Equipo Directivo IA
          </h1>
          <p style={{ color: "#555", marginTop: 12, fontSize: 15, maxWidth: 500, margin: "12px auto 0" }}>
            Agentes especializados en packaging industrial para Barbadela & Otangid
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14 }}>
          {agents.map((agent, i) => (
            <button key={agent.id} onClick={() => openAgent(agent)}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "22px", cursor: "pointer", textAlign: "left", transition: "all 0.2s ease", animation: `slideUp 0.5s ease ${i * 0.06}s both` }}
              onMouseEnter={(e) => { e.currentTarget.style.background = agent.glow; e.currentTarget.style.border = `1px solid ${agent.color}55`; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 10px 36px ${agent.glow}`; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ fontSize: 30 }}>{agent.icon}</span>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: agent.color, background: `${agent.color}18`, padding: "3px 8px", borderRadius: 6 }}>{agent.tag}</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 5, color: "#EEE" }}>{agent.name}</div>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.5 }}>{agent.desc}</div>
              <div style={{ marginTop: 16, fontSize: 12, color: agent.color, opacity: 0.8 }}>Consultar →</div>
            </button>
          ))}
        </div>
      </div>

      {activeAgent && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, animation: "fadeIn 0.2s ease" }} onClick={(e) => e.target === e.currentTarget && closeChat()}>
          <div style={{ background: "#0E0F1A", border: `1px solid ${activeAgent.color}33`, borderRadius: 20, width: "100%", maxWidth: 680, height: "85vh", maxHeight: 700, display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: `0 24px 80px ${activeAgent.glow}`, animation: "slideUp 0.3s ease" }}>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: 14, background: `linear-gradient(90deg,${activeAgent.glow},transparent)` }}>
              <span style={{ fontSize: 26 }}>{activeAgent.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{activeAgent.name}</div>
                <div style={{ fontSize: 11, color: activeAgent.color }}>Barbadela & Otangid · {activeAgent.tag}</div>
              </div>
              <button onClick={closeChat} style={{ background: "rgba(255,255,255,0.07)", border: "none", borderRadius: 8, color: "#888", cursor: "pointer", padding: "6px 12px", fontSize: 13 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "#888"; }}>
                ✕ Cerrar
              </button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: "20px", display: "flex", flexDirection: "column", gap: 12, scrollbarWidth: "thin", scrollbarColor: "#333 transparent" }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", animation: "fadeIn 0.3s ease" }}>
                  <div style={{ maxWidth: "80%", padding: "11px 15px", borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px", background: msg.role === "user" ? `linear-gradient(135deg,${activeAgent.color},${activeAgent.color}cc)` : "rgba(255,255,255,0.06)", color: msg.role === "user" ? "#fff" : "#DDD", fontSize: 14, lineHeight: 1.6, whiteSpace: "pre-wrap", border: msg.role === "assistant" ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div style={{ display: "flex", justifyContent: "flex-start", animation: "fadeIn 0.3s ease" }}>
                  <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px 16px 16px 4px", padding: "4px 12px" }}>
                    <TypingIndicator />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div style={{ padding: "14px 18px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: 10, alignItems: "flex-end" }}>
              <textarea value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKey} placeholder={`Consultá a tu ${activeAgent.name}...`} rows={1}
                style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "11px 14px", color: "#EEE", fontSize: 14, outline: "none", resize: "none", fontFamily: "inherit", lineHeight: 1.5, maxHeight: 120, overflowY: "auto" }}
                onFocus={(e) => (e.target.style.border = `1px solid ${activeAgent.color}66`)}
                onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.1)")} />
              <button onClick={sendMessage} disabled={loading || !input.trim()}
                style={{ background: loading || !input.trim() ? "rgba(255,255,255,0.07)" : activeAgent.color, border: "none", borderRadius: 12, padding: "11px 17px", cursor: loading || !input.trim() ? "not-allowed" : "pointer", color: loading || !input.trim() ? "#444" : "#fff", fontSize: 18, flexShrink: 0 }}>
                {loading ? "⏳" : "↑"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
