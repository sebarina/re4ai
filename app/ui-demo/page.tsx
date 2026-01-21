'use client';

import { useState } from 'react';
import { Modal, ToastContainer, useToast, Tooltip, AlertBanner } from '@/components/ui';
import Button from '@/components/Button';

// 图标组件
const TrashIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

export default function UIDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState<'small' | 'medium' | 'large'>('medium');
  const { toasts, removeToast, showSuccess, showError, showWarning, showInfo } = useToast();
  const [alertVisible, setAlertVisible] = useState(true);

  return (
    <div className="min-h-screen bg-deep-navy p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <h1 className="text-4xl font-bold text-bright-white mb-8">弹窗和通知组件展示</h1>

        {/* Modal Dialogs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Modal Dialogs</h2>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="medium"
              onClick={() => {
                setModalSize('small');
                setModalOpen(true);
              }}
            >
              Open Small Modal
            </Button>
            <Button
              variant="primary"
              size="medium"
              onClick={() => {
                setModalSize('medium');
                setModalOpen(true);
              }}
            >
              Open Medium Modal
            </Button>
            <Button
              variant="primary"
              size="medium"
              onClick={() => {
                setModalSize('large');
                setModalOpen(true);
              }}
            >
              Open Large Modal
            </Button>
          </div>

          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="确认操作"
            message={
              modalSize === 'small'
                ? 'Are you sure you want to delete this item?'
                : modalSize === 'medium'
                ? 'Are you sure you want to publish this document?'
                : 'Are you sure you want to reset all settings?'
            }
            icon={
              modalSize === 'small' ? (
                <TrashIcon />
              ) : modalSize === 'medium' ? (
                <DocumentIcon />
              ) : (
                <SettingsIcon />
              )
            }
            size={modalSize}
            confirmText="确认"
            cancelText="取消"
            onConfirm={() => {
              console.log('Confirmed');
              setModalOpen(false);
            }}
          />
        </section>

        {/* Toast Notifications */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Toast Notifications</h2>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="medium"
              onClick={() => {
                showSuccess('保存成功', 'Saved successfully');
              }}
            >
              Show Success Toast
            </Button>
            <Button
              variant="primary"
              size="medium"
              onClick={() => {
                showError('错误', 'Error occurred');
              }}
            >
              Show Error Toast
            </Button>
            <Button
              variant="primary"
              size="medium"
              onClick={() => {
                showWarning('警告', 'Warning message');
              }}
            >
              Show Warning Toast
            </Button>
            <Button
              variant="primary"
              size="medium"
              onClick={() => {
                showInfo('信息', 'Information note');
              }}
            >
              Show Info Toast
            </Button>
          </div>

          <ToastContainer toasts={toasts} onRemove={removeToast} />
        </section>

        {/* Tooltips */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Tooltips</h2>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="点击查看详情" position="top">
              <Button variant="secondary" size="medium">
                Hover me (Top)
              </Button>
            </Tooltip>
            <Tooltip content="点击查看详情" position="bottom">
              <Button variant="secondary" size="medium">
                Hover me (Bottom)
              </Button>
            </Tooltip>
            <Tooltip content="点击查看详情" position="left">
              <Button variant="secondary" size="medium">
                Hover me (Left)
              </Button>
            </Tooltip>
            <Tooltip content="点击查看详情" position="right">
              <Button variant="secondary" size="medium">
                Hover me (Right)
              </Button>
            </Tooltip>
          </div>
        </section>

        {/* Alert Banners */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">Alert Banners</h2>
          <div className="max-w-2xl">
            {alertVisible && (
              <AlertBanner
                icon={<RefreshIcon />}
                title="系统更新通知"
                subtitle="System update available"
                actionText="更新"
                onAction={() => {
                  console.log('Update clicked');
                }}
                onClose={() => setAlertVisible(false)}
              />
            )}
            {!alertVisible && (
              <Button
                variant="secondary"
                size="medium"
                onClick={() => setAlertVisible(true)}
              >
                Show Alert Banner
              </Button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
