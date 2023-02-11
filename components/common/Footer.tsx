import Link from "next/link";
import {
  FaBullhorn,
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => (
  <footer className="footer p-10 bg-neutral text-neutral-content">
    <div>
      <span className="footer-title">Media Online</span>
      <Link href="#" target="_blank">
        <FaFacebook className="inline" /> jemaat gpm sion
      </Link>
      <Link href="#" target="_blank">
        <FaYoutube className="inline" /> jemaatgpmsionkotaambon
      </Link>
      <Link href="#" target="_blank">
        <FaInstagram className="inline" /> jemaatgpmsion
      </Link>
    </div>
    <div>
      <span className="footer-title">Link Terkait</span>
      <Link href="#" target="_blank">
        <FaGlobe className="inline" /> klasiskotaambon.org
      </Link>
      <Link href="#" target="_blank">
        <FaGlobe className="inline" /> sinodegpm.id
      </Link>
    </div>
    <div>
      <span className="footer-title">Saran & Pendapat</span>
      <div className="flex gap-4">
        <div>
          <FaBullhorn size={32} />
        </div>
        <div className="text-xl">
          <p className="font-light">
            Punya pertanyaan
            <br />
            saran dan pendapat?
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfRgiA4vRwb3p5k3G1-1uZbeylM0gGs6uwL0x4GjgVjjopOAw/viewform?usp=pp_url"
            target="_blank"
            className="underline font-black"
          >
            Kirim
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
