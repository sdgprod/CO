import React, { useState, useEffect } from 'react';
import {
  CheckCircle,
  MessageSquare,
  Send,
  StickyNote,
  Trash2,
  Shield
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

interface Note {
  id: string;
  company_name: string;
  author_name: string;
  author_title: string;
  content: string;
  created_at: string;
}

interface RightSidebarProps {
  companyName: string;
  pageType?: 'db-report' | 'default';
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const RightSidebar: React.FC<RightSidebarProps> = ({ companyName, pageType = 'default' }) => {
  const [chatMessage, setChatMessage] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorTitle, setAuthorTitle] = useState('');
  const [isAddingNote, setIsAddingNote] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, [companyName]);

  const fetchNotes = async () => {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .eq('company_name', companyName)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching notes:', error);
    } else {
      setNotes(data || []);
    }
  };

  const handleAddNote = async () => {
    if (!newNote.trim() || !authorName.trim() || !authorTitle.trim()) {
      alert('Please fill in all fields (Name, Title, and Note)');
      return;
    }

    const { error } = await supabase
      .from('notes')
      .insert([
        {
          company_name: companyName,
          author_name: authorName,
          author_title: authorTitle,
          content: newNote
        }
      ]);

    if (error) {
      console.error('Error adding note:', error);
      alert('Failed to add note. Please try again.');
    } else {
      setNewNote('');
      setIsAddingNote(false);
      fetchNotes();
    }
  };

  const handleDeleteNote = async (noteId: string) => {
    if (!confirm('Are you sure you want to delete this note?')) {
      return;
    }

    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', noteId);

    if (error) {
      console.error('Error deleting note:', error);
      alert('Failed to delete note. Please try again.');
    } else {
      fetchNotes();
    }
  };

  const formatNoteTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) {
      return diffMins === 0 ? 'Just now' : `${diffMins}m ago`;
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else if (diffDays < 7) {
      return `${diffDays}d ago`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Compliance Status</h3>
        </div>
        <div className="space-y-3">
          {pageType === 'db-report' ? (
            <>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">D&B Verified</span>
                </div>
                <span className="text-xs font-semibold text-green-600 px-2 py-1 bg-green-100 rounded">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">Financial Data</span>
                </div>
                <span className="text-xs font-semibold text-green-600 px-2 py-1 bg-green-100 rounded">Current</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">Credit Rating</span>
                </div>
                <span className="text-xs font-semibold text-green-600 px-2 py-1 bg-green-100 rounded">A1</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">Third Party Assessment</span>
                </div>
                <span className="text-xs font-semibold text-green-600 px-2 py-1 bg-green-100 rounded">Available</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">SSM Registration</span>
                </div>
                <span className="text-xs font-semibold text-green-600 px-2 py-1 bg-green-100 rounded">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">Tax Compliance</span>
                </div>
                <span className="text-xs font-semibold text-green-600 px-2 py-1 bg-green-100 rounded">Current</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">MPOB License</span>
                </div>
                <span className="text-xs font-semibold text-green-600 px-2 py-1 bg-green-100 rounded">Valid</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">Third Party Rating Assessment</span>
                </div>
                <span className="text-xs font-semibold text-green-600 px-2 py-1 bg-green-100 rounded">Available</span>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col h-[600px]">
        <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
          <MessageSquare className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Team Discussion</h3>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex space-x-3">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
              alt="Sarah Chen"
              className="w-8 h-8 rounded-full flex-shrink-0"
            />
            <div className="flex-1">
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm font-semibold text-gray-900">Sarah Chen</p>
                <p className="text-sm text-gray-700 mt-1">Background check completed. Everything looks good.</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
            </div>
          </div>

          <div className="flex space-x-3">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
              alt="Michael Roberts"
              className="w-8 h-8 rounded-full flex-shrink-0"
            />
            <div className="flex-1">
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm font-semibold text-gray-900">Michael Roberts</p>
                <p className="text-sm text-gray-700 mt-1">The compliance status is clear. Should we proceed?</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">10:32 AM</p>
            </div>
          </div>

          <div className="flex space-x-3">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
              alt="Emily Wong"
              className="w-8 h-8 rounded-full flex-shrink-0"
            />
            <div className="flex-1">
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm font-semibold text-gray-900">Emily Wong</p>
                <p className="text-sm text-gray-700 mt-1">Yes, all directors have been verified. No adverse findings.</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">10:35 AM</p>
            </div>
          </div>

          <div className="flex space-x-3 flex-row-reverse">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
              alt="You"
              className="w-8 h-8 rounded-full flex-shrink-0"
            />
            <div className="flex-1">
              <div className="bg-blue-600 rounded-lg p-3 ml-auto max-w-[85%]">
                <p className="text-sm text-white">Perfect. Let's move forward with the credit assessment.</p>
              </div>
              <p className="text-xs text-gray-500 mt-1 text-right">10:37 AM</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <StickyNote className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-bold text-gray-900">Notes & Comments</h3>
          </div>
          <button
            onClick={() => setIsAddingNote(!isAddingNote)}
            className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            {isAddingNote ? 'Cancel' : '+ Add Note'}
          </button>
        </div>

        {isAddingNote && (
          <div className="mb-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Your Name"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
                <input
                  type="text"
                  value={authorTitle}
                  onChange={(e) => setAuthorTitle(e.target.value)}
                  placeholder="Your Title"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
              </div>
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Write your note or comment..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm resize-none"
              />
              <div className="flex justify-end">
                <button
                  onClick={handleAddNote}
                  className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Post Note
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3 max-h-[400px] overflow-y-auto">
          {notes.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <StickyNote className="w-12 h-12 mx-auto mb-2 text-gray-300" />
              <p className="text-sm">No notes yet. Be the first to add one!</p>
            </div>
          ) : (
            notes.map((note) => (
              <div key={note.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{note.author_name}</p>
                    <p className="text-xs text-gray-500">{note.author_title}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">{formatNoteTime(note.created_at)}</span>
                    <button
                      onClick={() => handleDeleteNote(note.id)}
                      className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                      title="Delete note"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{note.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
