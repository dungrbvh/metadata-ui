export interface InitialState {
    announcements?: AnnouncementState;
    metrics?: MetricState;
    dimesions?: DimensionState;
    users: UserState;
}

export interface StateProps {
    announcements?: AnnouncementState;
    dimensions?: DimensionState;
    error?: ErrorState;
    metrics?: MetricState;
    users?: UserState; 
}

export interface DispatchProps {
    getAnnouncements?: () => void;
    createAnnoucement?: () => void;
    updateAnnouncement?: () => void; 
    deleteAnnouncement?: () => void;
    setActiveAnnouncements?: (announcement: Announcement) => void;
    clearActiveAnnouncement?: () => void;
    getDimensions?: () => void;
    createDimension?: () => void;
    updateDimension?: () => void;
    deleteDimension?: () => void;
    getMetrics?: () => void;
    createMetric?: () => void;
    updateMetric?: () => void;
    deleteMetric?: () => void;
    getUsers?: () => void;
    createUser?: () => void;
    updateUser?: () => void;
    deleteUser?: () => void;
}

export interface Announcement {
    _id?: string;
    title?: string; 
    tag?: string;
    body?: string;
    created_at?: string; 
    updated_at?: string;
}

export interface AnnouncementState {
    retrieved?: Announcement[];
    current?: Announcement;
}   

export interface AnnouncementProps {
    announcements: AnnouncementState;
    error: ErrorState;
    getAnnouncements?: ()=> void;
    createAnnouncement?: (tag: string, title: string, body: string[]) => void;
    updateAnnouncement?: (_id: string, tag?: string, title?: string, body?: string[]) => void;
    deleteAnnouncement?: (_id: string) => void;
    setActiveAnnouncement?: (announcement: Announcement) => void;
    clearActiveAnnouncement?: () => void;
    showError?: (message: string) => void;
    clearError?: () => void;
}

export interface Dimension {
    _id?: string;
    category?: string;
    data_type?: string; 
    default_allocation?: string;
    description?: string;
    isRealtime?: boolean;
    key?: string;
    name?: string;
    owner?: string;
    visibility?: string;
}
export interface DimensionProps {
    dimensions: DimensionState;
    getDimensions?: () => void;
    createDimension?: () => void;
    updateDimension?: () => void;
    deleteDimension?: () => void;
}

export interface DimensionState {
    retrieved?: Dimension[];
    current?: Dimension;
}

export interface ErrorState {
    message: string; 
}

export interface Metric {
    _id?: string;
    category?: string;
    description?: string;
    key?: string;
    name?: string;
    owner?: string;
    visibility?: string;
}

export interface MetricProps {
    metrics: MetricState;
    getMetrics?: () => void;
    createMetric?: () => void;
    updateMetric?: () => void;
    deleteMetric?: () => void;
}

export interface MetricState {
    retrieved?: Metric[];
    current?: Metric;
}

export interface User {
    _id?: string;
    name?: string;
    email?: string;
    display_name?: string; 
    long_account?: string;
    company?: string;
    created_at?: string;
    department?: string;
    time_zone?: string;
    update_at?: string;
    verified?: boolean;
    verified_at?: string;
}

export interface UserProps {
    users: UserState;
    getUsers?: () => void;
    createUser?: (
        email: string,
        time_zone: string, 
        created_at: string, 
        long_account: string, 
        company: string,
        department: string,
        update_at: string,
        display_name: string,
        verified: boolean,
        verified_at: string
    ) => void;
    updateUser?: (
        _id: string, 
        email: string,
        time_zone: string, 
        created_at: string, 
        long_account: string, 
        company: string,
        department: string,
        update_at: string,
        display_name: string,
        verified: boolean,
        verified_at: string
    ) => void;
    deleteUser?: (_id: string) => void; 
}

export interface UserState {
    retrived?: User[];
    current?: User;
}

export interface Response {
    getAnnouncements?: object[];
    createAnnouncement?: object;
    updateAnnouncement?: object;
    deleteAnnouncement?: object;
    getDimensions?: object[];
    createDimension?: object;
    updateDimension?: object;
    deleteDimension?: object;
    getMetrics?: object[];
    createMetric?: object;
    updateMetric?: object;
    deleteMetric?: object;
    getUsers?: object[];
    createUser?: object;
    updateUser?: object;
    deleteUser?: object;
}