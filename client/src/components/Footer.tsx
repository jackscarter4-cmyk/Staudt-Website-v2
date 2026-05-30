import { useLocation } from "wouter";

/**
 * Site footer — single source of truth, used on every page.
 * Matches the original Primary-bg, three-column layout.
 */

export default function Footer() {
  const [, setLocation] = useLocation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="font-bold text-lg mb-3">About</h4>
            <p className="text-sm opacity-90 mb-3">
              A collection of Sunday homilies and biblical readings to support
              your spiritual journey.
            </p>
            <button
              onClick={() => setLocation("/about")}
              className="text-sm opacity-90 hover:underline text-left"
            >
              • About Fr. Joe Staudt
            </button>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-3">Resources</h4>
            <ul className="text-sm space-y-2 opacity-90">
              <li>
                <button
                  onClick={() => setLocation("/archive")}
                  className="hover:underline text-left"
                >
                  • Homily Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLocation("/contemplative-prayer")}
                  className="hover:underline text-left"
                >
                  • Contemplative Prayer
                </button>
              </li>
              <li>• Liturgical Calendar</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-3">Support</h4>
            <ul className="text-sm space-y-2 opacity-90">
              <li>
                <a
                  href="https://wl.donorperfect.net/weblink/weblink.aspx?name=E3014&id=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  • Donate to Catholic Charities
                </a>
              </li>
              <li>• Contact Us</li>
              <li>• Prayer Requests</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; {year} Fr. Joe Staudt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
