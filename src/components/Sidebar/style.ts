import styled from "styled-components";

export const SidebarWrapper = styled.div`
  display: flex;
  width: 240px;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-right: 1px solid #edf2f6;
  //background: radial-gradient(50% 50% at 50% 50%, #1b5d98 0%, #0c3f6c 100%);
  background: #77ffff;
`;

export const SidebarHeaderAndMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const SidebarHeader = styled.div`
  display: flex;
  width: 240px;
  height: 75px;
  padding: 4px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #edf2f6;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  padding: 0 0 0 20px;
`;

export const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const SidebarSubmenu = styled.div`
  display: flex;
  width: 240px;
  padding-top: 16px;
  flex-direction: column;
  align-items: flex-start;
`;

export const SidebarFooterFooter = styled.div`
  display: flex;
  width: 240px;
  padding: 16px;
  align-items: flex-start;
  border-top: 1px solid #edf2f6;
`;

export const SidebarMenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
`;

export const Text = styled.p`
  //color: rgba(255, 255, 255, 0.7);
  color: rgba(0, 0, 0, 0.7);
  font-family: SF Pro Display;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 18px;
`;
