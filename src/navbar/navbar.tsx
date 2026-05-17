import { YouTubeIcon, TwitterIcon, DiscordIcon, TwitchIcon } from '../assets/icons';
import CustomLink from '../utils/CustomLink';
import { useMediaQuery } from '../utils/useMediaQuery';
import Drawer from './drawer';
import { Video, Library, AlertCircle } from 'lucide-react';

const socials = [
  { path: `https://www.youtube.com/c/dizzy1`, icon: <YouTubeIcon className="text-primary" /> },
  { path: `https://discord.gg/dizcord`, icon: <DiscordIcon className="text-primary" /> },
  { path: `https://twitter.com/dizzy`, icon: <TwitterIcon className="text-primary" /> },
  { path: `https://twitch.tv/dizzy`, icon: <TwitchIcon className="text-primary" /> },
];

interface NavbarProps {
  channel: string;
  logo: string;
}

export default function Navbar({ channel, logo }: NavbarProps) {
  const isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <div className="flex-1">
      <header className="bg-dark-light shadow-lg">
        <div className="flex items-center px-4 py-2">
          <div className="flex items-center flex-1">
            {isMobile && <Drawer socials={socials} />}

            <div className="mr-2">
              <CustomLink href="/">
                <img alt="" style={{ maxWidth: '45px', height: 'auto' }} src={logo} />
              </CustomLink>
            </div>

            <span className="mr-1 text-lg">
              <CustomLink color="inherit" href="/">
                <span className="text-primary font-semibold">{channel}</span>
              </CustomLink>
            </span>

            {!isMobile && (
              <>
                <hr className="h-6 border-l border-gray-600 mx-2" />

                {socials.map(({ path, icon }) => (
                  <div key={path} className="mr-2">
                    <CustomLink href={path}>{icon}</CustomLink>
                  </div>
                ))}
              </>
            )}
          </div>

          {!isMobile && (
            <div className="flex items-center justify-center flex-1">
              <div className="mr-2">
                <CustomLink href="/vods">
                  <div className="flex justify-center items-center gap-1">
                    <Video className="text-primary mr-0.5" size={24} />
                    <span className="text-primary font-semibold text-lg">Vods</span>
                  </div>
                </CustomLink>
              </div>
              <div className="mr-2">
                <CustomLink href="/library">
                  <div className="flex justify-center items-center gap-1">
                    <Library className="text-primary mr-0.5" size={24} />
                    <span className="text-primary font-semibold text-lg">Library</span>
                  </div>
                </CustomLink>
              </div>
            </div>
          )}

          {!isMobile && (
            <div className="flex justify-end flex-1">
              <div className="mr-2">
                <CustomLink href={`${import.meta.env.VITE_GITHUB}/issues`}>
                  <div className="flex justify-center items-center gap-1">
                    <AlertCircle className="text-primary mr-0.5" size={24} />
                    <span className="text-primary font-semibold text-lg">Issues</span>
                  </div>
                </CustomLink>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
