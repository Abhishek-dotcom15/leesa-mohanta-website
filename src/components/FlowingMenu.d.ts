declare module '@/components/FlowingMenu' {
  interface FlowingMenuProps {
    items: Array<{
      link: string;
      text: string;
      image: string;
    }>;
    speed?: number;
    textColor?: string;
    bgColor?: string;
    marqueeBgColor?: string;
    marqueeTextColor?: string;
    borderColor?: string;
  }

  const FlowingMenu: React.FC<FlowingMenuProps>;
  export default FlowingMenu;
}
