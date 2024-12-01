/* eslint-disable react/jsx-key */
import { removeRule, rule, updateRule } from '@/services/ant-design-pro/api';  
import { PlusOutlined } from '@ant-design/icons';  
import type { ActionType, ProColumns } from '@ant-design/pro-components';  
import { FooterToolbar, PageContainer, ProTable } from '@ant-design/pro-components';  
import { FormattedMessage, useIntl } from '@umijs/max';  
import { Button, Input, message, Select, DatePicker } from 'antd';  
import React, { useRef, useState } from 'react';  
import type { FormValueType } from './components/UpdateForm';  
import UpdateForm from './components/UpdateForm';  
const { Option } = Select; 
const { RangePicker } = DatePicker;  

/**  
 * @en-US Add node  
 * @zh-CN 添加节点  
 * @param fields  
 */  

/**  
 * @en-US Update node  
 * @zh-CN 更新节点  
 *  
 * @param fields  
 */  
const handleUpdate = async (fields: FormValueType) => {  
  const hide = message.loading('Configuring');  
  try {  
    await updateRule({  
      name: fields.name,  
      desc: fields.desc,  
      key: fields.key,  
    });  
    hide();  

    message.success('Configuration is successful');  
    return true;  
  } catch (error) {  
    hide();  
    message.error('Configuration failed, please try again!');  
    return false;  
  }  
};  

/**  
 *  Delete node  
 * @zh-CN 删除节点  
 *  
 * @param selectedRows  
 */  
const handleRemove = async (selectedRows: API.RuleListItem[]) => {  
  const hide = message.loading('正在删除');  
  if (!selectedRows) return true;  
  try {  
    await removeRule({  
      key: selectedRows.map((row) => row.key),  
    });  
    hide();  
    message.success('Deleted successfully and will refresh soon');  
    return true;  
  } catch (error) {  
    hide();  
    message.error('Delete failed, please try again');  
    return false;  
  }  
};  

const TableList: React.FC = () => {  

  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);  

  const actionRef = useRef<ActionType>();  
  const [currentRow, setCurrentRow] = useState<API.RuleListItem>();  
  const [selectedRowsState, setSelectedRows] = useState<API.RuleListItem[]>([]);  

  const intl = useIntl();  

  const columns: ProColumns<API.RuleListItem>[] = [  
    {  
      title: (  
        <FormattedMessage  
          id="pages.searchTable.updateForm.ruleName.nameLabel"  
          defaultMessage="Rule name"  
        />  
      ),  
      dataIndex: 'name',  
      render: (dom, entity) => {  
        return (  
          <span  
            onClick={() => {  
              setCurrentRow(entity);  
            }}  
          >  
            {dom}  
          </span>  
        );  
      },  
    },  
    {  
      title: <FormattedMessage id="pages.searchTable.titleDesc" defaultMessage="Description" />,  
      dataIndex: 'desc',  
      valueType: 'textarea',  
    },  
    {  
      title: (  
        <FormattedMessage  
          id="pages.searchTable.titleCallNo"  
          defaultMessage="Number of service calls"  
        />  
      ),  
      dataIndex: 'callNo',  
      sorter: true,  
      renderText: (val: string) =>  
        `${val}${intl.formatMessage({  
          id: 'pages.searchTable.tenThousand',  
          defaultMessage: ' 万 ',  
        })}`,  
    },  
    {  
      title: <FormattedMessage id="pages.searchTable.titleStatus" defaultMessage="Status" />,  
      dataIndex: 'status',  
      valueEnum: {  
        0: {  
          text: (  
            <FormattedMessage  
              id="pages.searchTable.nameStatus.default"  
              defaultMessage="Shut down"  
            />  
          ),  
          status: 'Default',  
        },  
        1: {  
          text: (  
            <FormattedMessage id="pages.searchTable.nameStatus.running" defaultMessage="Running" />  
          ),  
          status: 'Processing',  
        },  
        2: {  
          text: (  
            <FormattedMessage id="pages.searchTable.nameStatus.online" defaultMessage="Online" />  
          ),  
          status: 'Success',  
        },  
        3: {  
          text: (  
            <FormattedMessage  
              id="pages.searchTable.nameStatus.abnormal"  
              defaultMessage="Abnormal"  
            />  
          ),  
          status: 'Error',  
        },  
      },  
    },  
    {  
      title: (  
        <FormattedMessage  
          id="pages.searchTable.titleUpdatedAt"  
          defaultMessage="Last scheduled time"  
        />  
      ),  
      sorter: true,  
      dataIndex: 'updatedAt',  
      valueType: 'dateTime',  
    },  
    {  
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,  
      dataIndex: 'option',  
      valueType: 'option',  
      render: (_, record) => [  
        <a  
          key="config"  
          onClick={() => {  
            handleUpdateModalOpen(true);  
            setCurrentRow(record);  
          }}  
        >  
          <FormattedMessage id="pages.searchTable.config" defaultMessage="Configuration" />  
        </a>,  
      ],  
    },  
  ];  

  return (  
    <PageContainer>  
      <ProTable<API.RuleListItem, API.PageParams>    
        actionRef={actionRef}  
        rowKey="key"  
        search={false}  
        toolBarRender={() => [  
          // eslint-disable-next-line react/jsx-key
          <Input.Search  
            placeholder={intl.formatMessage({ id: 'pages.searchTable.searchPlaceholder', defaultMessage: 'Search by rule name...' })}  
            style={{ width: 200, marginRight: 16 }}  
          />,  
          <Select placeholder="Filter by Status" style={{ width: 150, marginRight: 16 }}>  
            <Option value="0">Shut down</Option>  
            <Option value="1">Running</Option>  
            <Option value="2">Online</Option>  
            <Option value="3">Abnormal</Option>  
          </Select>,  
          <Select placeholder="Filter by Assignee" style={{ width: 150, marginRight: 16 }}>  
            <Option value="assignee1">Assignee 1</Option>  
            <Option value="assignee2">Assignee 2</Option>  
          </Select>,  
          <RangePicker style={{ marginRight: 16 }} />,  
          <Button  
            type="primary"  
            onClick={() => {  
            }}  
          >  
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />  
          </Button>,  
        ]}  
        request={rule}  
        columns={columns}  
        rowSelection={{  
          onChange: (_, selectedRows) => {  
            setSelectedRows(selectedRows);  
          },  
        }}  
      />  
      {selectedRowsState?.length > 0 && (  
        <FooterToolbar  
          extra={  
            <div>  
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}  
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}  
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />  
              &nbsp;&nbsp;  
              <span>  
                <FormattedMessage  
                  id="pages.searchTable.totalServiceCalls"  
                  defaultMessage="Total number of service calls"  
                />{' '}  
                {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)}{' '}  
                <FormattedMessage id="pages.searchTable.tenThousand" defaultMessage="万" />  
              </span>  
            </div>  
          }  
        >  
          <Button  
            onClick={async () => {  
              await handleRemove(selectedRowsState);  
              setSelectedRows([]);  
              actionRef.current?.reloadAndRest?.();  
            }}  
          >  
            <FormattedMessage  
              id="pages.searchTable.batchDeletion"  
              defaultMessage="Batch deletion"  
            />  
          </Button>  
          <Button type="primary">  
            <FormattedMessage  
              id="pages.searchTable.batchApproval"  
              defaultMessage="Batch approval"  
            />  
          </Button>  
        </FooterToolbar>  
      )}  
      <UpdateForm  
        onSubmit={async (value) => {  
          const success = await handleUpdate(value);  
          if (success) {  
            handleUpdateModalOpen(false);  
            setCurrentRow(undefined);  
            if (actionRef.current) {  
              actionRef.current.reload();  
            }  
          }  
        }}  
        onCancel={() => {  
          handleUpdateModalOpen(false);  
        }}  
        updateModalOpen={updateModalOpen}  
        values={currentRow || {}}  
      />  
    </PageContainer>  
  );  
};  

export default TableList;