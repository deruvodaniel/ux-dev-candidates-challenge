import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import styles from "./mobile-nav.module.css";
import headerStyles from "../header/header.module.css";
import sidebarStyles from "../sidebar/sidebar.module.css";
import clsx from "clsx";
import { Toggle } from "../../../atoms/toggle/toggle";
import { navItems } from "../../../../constants/nav-items";
import { NavItems } from "../nav-items/nav-items";

type MobileNavProps = {
  className?: string;
};

export const MobileNav = ({ className }: MobileNavProps) => {
  const user = "Robert";
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <header className={clsx(styles.mobileHeader, className)}>
        <Link to={`/`} className={headerStyles.logo}>
          <img src="logo.png" alt="Home" />
        </Link>
        <button className={styles.hamburgerMenu} onClick={() => setIsOpen(true)}>
          <Bars3Icon />
        </button>
      </header>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content className={clsx(styles.navContent, sidebarStyles.sidebar, className)}>
            <button onClick={handleClose} className={styles.closeButton} aria-label="Close">
              <XMarkIcon />
            </button>
            <div className={styles.navWrapper}>
              <h4>Menu</h4>
              <NavItems items={navItems} onItemClick={handleClose} />
            </div>
            <div className={styles.navFooter}>
              <Toggle />
              <div className={headerStyles.user}>
                <img src="user.svg" alt="user" />
                <p>Hi, {user}!</p>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
