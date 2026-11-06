"use client";

import { useEffect, useId, useState, type CSSProperties } from "react";
import { ModalCloseButton } from "./ModalCloseButton";
import { useAnimatedDialog } from "@/lib/use-animated-dialog";

const FLAG = "THJCC-HCR{H4TS_1N_SYNC}";

export function TeamHatEasterEgg({ open, onClose, onReset }: { open: boolean; onClose: () => void; onReset: () => void }) {
  const { modal, requestClose } = useAnimatedDialog(open, onClose);
  const id = useId();
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    if (open) setCopyStatus("");
  }, [open]);

  if (!open) return null;

  async function copyFlag() {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(FLAG);
      setCopyStatus("紀念 Flag 已複製，和朋友分享你的發現吧！");
    } catch {
      setCopyStatus("可以直接選取上方的 Flag，手動複製。");
    }
  }

  return (
    <dialog ref={modal} className="organization-modal team-hat-easter-egg" aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-description`} data-lenis-prevent>
      <div className="organization-modal-panel">
        <ModalCloseButton label="關閉彩蛋" onClick={() => requestClose()} />
        <div className="team-hat-sparks" aria-hidden="true">
          {Array.from({ length: 8 }, (_, index) => (
            <span key={index} style={{ "--spark": index } as CSSProperties}>✦</span>
          ))}
        </div>
        <p className="team-hat-achievement">隱藏彩蛋解鎖</p>
        <h2 id={`${id}-title`}>帽子戴好，別歪了</h2>
        <p className="team-hat-easter-egg-copy" id={`${id}-description`}>
          你把大家的帽子轉到同一個方向，解鎖了官網的隱藏成就。這枚紀念 Flag 是你的探索紀錄，複製後和朋友分享這個小彩蛋吧！
        </p>
        <code className="team-hat-flag">{FLAG}</code>
        <div className="team-hat-actions">
          <button className="team-hat-copy" type="button" onClick={copyFlag}>複製紀念 Flag</button>
          <button className="team-hat-reset" type="button" onClick={() => requestClose(onReset)}>重設帽子，再玩一次</button>
        </div>
        <p className="team-hat-copy-status" role="status">{copyStatus}</p>
      </div>
    </dialog>
  );
}
