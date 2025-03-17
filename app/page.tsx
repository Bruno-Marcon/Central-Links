import Image from "next/image"
import { LinkCard } from "@/components/link-card"
import { LinkSection } from "@/components/link-section"
import { Search } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="flex flex-col items-center mb-8">
          <div className="w-48 h-24 relative mb-4">
            <Image src="/logo.png" alt="Logo Rede Salvatoriana" fill className="object-contain" priority />
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold text-blue-800 text-center">Central de Links</h1>
        </header>

        {/* Acompanhamento de Chamados - Destacado */}
        <div className="mb-8">
          <a
            href="https://redesalvatoriana.suport.cloud/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 mx-auto w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors duration-200 group"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-white text-blue-600 rounded-full mr-4">
                <Search size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold">Acompanhamento de Chamados</h2>
                <p className="text-blue-100">Portal do cliente para consultar e acompanhar chamados realizados</p>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="bg-white text-blue-600 px-3 py-1 rounded-full font-medium">Acessar →</span>
            </div>
          </a>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Chamados Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-medium text-blue-700 mb-4">Abertura de Chamados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LinkCard
                href="https://formulario-ticket.milvus.com.br/home/e9d41bd4413eba909dc69ad23d40042c176302208c222a05f2e245e7efd87f170db5b5abb1988fea3555133b4b8a3894b6bc3e881d969ff00e0c903e05eabe3378399f661d9edfa9f81ab785d7918b6983badb1aa9c7fb"
                title="Chamados HSDS"
                icon="ticket"
              />
              <LinkCard
                href="https://formulario-ticket.milvus.com.br/home/e9d41bd4413eba909dc69ad33d40042c176302208c222a05f2e245e7efd87f170db5b5abb1988fea3555133b4b8a3894b6bc3e881d969ff0090c953005eabe3378399f661d8d9286f52d84daede49c48e69ef72adfc7fb"
                title="Chamados HSSM"
                icon="ticket"
              />
            </div>
          </section>

          {/* Convênios Section */}
          <LinkSection
            title="Convênios"
            icon="credit-card"
            links={[
              { href: "https://rda.unimedsc.com.br/capa/", title: "Unimed", icon: "activity" },
              { href: "https://brf.serhlife.com.br/", title: "BRF", icon: "building" },
              { href: "https://pladisaonline.com.br/", title: "Pladisa", icon: "clipboard-list" },
              { href: "https://portal.scsaude.sc.gov.br/sistemas", title: "SC Saúde", icon: "heart-pulse" },
            ]}
            defaultOpen={true}
          />

          {/* Governo Section */}
          <LinkSection
            title="Governo"
            icon="landmark"
            links={[
              { href: "https://sisregiii.saude.gov.br/cgi-bin/index", title: "SISREG", icon: "medical-cross" },
              {
                href: "https://cadastro.saude.gov.br/segcartao/?contextType=external&username=string&contextValue=%2Foam&password=sercure_string&challenge_url=https%3A%2F%2Fcadastro.saude.gov.br%2Fsegcartao&request_id=-402988459713884428&authn_try_count=0&locale=pt_BR&resource_url=http%253A%252F%252Fcadastro.saude.gov.br%252Fnovocartao%252Frestrito%252FusuarioConsulta.jsp%253FgovBrCode%253DAQsqoo#",
                title: "CADSUS",
                icon: "id-card",
              },
              { href: "https://leitos.saude.sc.gov.br/login", title: "SES Leitos", icon: "bed" },
            ]}
          />

          {/* Comunicação Section */}
          <LinkSection
            title="Comunicação"
            icon="message-square"
            links={[
              { href: "https://redesalvatoriana.desk.blip.ai", title: "Blip Desk", icon: "message-circle" },
              {
                href: "https://qr.me-qr.com/pt/LAaLTP2Y#google_vignette",
                title: "Notificação Compulsória",
                icon: "bell",
              },
            ]}
          />

          {/* Exames Section */}
          <LinkSection
            title="Exames"
            icon="microscope"
            links={[
              { href: "https://laudos.mobilemed.com.br/exames", title: "Mobilemed", icon: "file-text" },
              {
                href: "https://web18.concentsistemas.com.br/ConcentWebCli0640/servlet/hlab8000",
                title: "Laboratório",
                icon: "flask",
              },
            ]}
          />

          {/* Outros Section */}
          <LinkSection
            title="Outros"
            icon="more-horizontal"
            links={[
              {
                href: "https://www.pegaplantao.com.br/Login?ReturnUrl=%2fVisualizacaoEscala",
                title: "Pega Plantão",
                icon: "calendar",
              },
            ]}
          />
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Rede Salvatoriana. Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  )
}

